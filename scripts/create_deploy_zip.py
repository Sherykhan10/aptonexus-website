import os
import zipfile

out_dir = os.path.abspath("out")
zip_path = os.path.abspath("deploy.zip")

print(f"Creating POSIX-compliant {zip_path} from {out_dir}...")

with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(out_dir):
        # Sort files and directories for deterministic builds
        dirs.sort()
        files.sort()
        for file in files:
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, out_dir)
            # Ensure strict POSIX forward slashes for Linux hosts (Hostinger/cPanel/Nginx)
            arcname = rel_path.replace(os.sep, "/").replace("\\", "/")
            zipf.write(file_path, arcname)

print("Archive created successfully. Verifying archive structure...")
with zipfile.ZipFile(zip_path, "r") as zipf:
    backslash_count = 0
    total_count = 0
    sample_entries = []
    has_root_index_html = False
    for info in zipf.infolist():
        total_count += 1
        if "\\" in info.filename:
            backslash_count += 1
        if info.filename == "index.html":
            has_root_index_html = True
        if len(sample_entries) < 15:
            sample_entries.append(info.filename)

    file_size_mb = os.path.getsize(zip_path) / (1024 * 1024)
    print(f"Total entries: {total_count}")
    print(f"Entries containing backslashes: {backslash_count}")
    print(f"Contains root index.html: {has_root_index_html}")
    print(f"Final file size: {file_size_mb:.2f} MB")
    print("Sample archive paths:")
    for s in sample_entries:
        print(f"  - {s}")

    if backslash_count > 0:
        raise RuntimeError("Validation failed: backslashes found in archive paths!")
    if not has_root_index_html:
        raise RuntimeError("Validation failed: root index.html is missing!")
