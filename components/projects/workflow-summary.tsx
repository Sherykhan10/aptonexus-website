export function WorkflowSummary({ stages }: { stages?: string[] }) {
  if (!stages?.length) return null;
  return (
    <ol className="project-workflow-summary" aria-label="Workflow at a glance">
      {stages.map((stage, index) => (
        <li key={`${index}-${stage}`}>
          {index > 0 && (
            <span className="summary-arrow" aria-hidden="true">
              →
            </span>
          )}
          <span>{stage}</span>
        </li>
      ))}
    </ol>
  );
}
