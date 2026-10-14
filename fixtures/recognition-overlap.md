# Recognition overlap fixture
Synthetic scenario for testing Comma's GitHub work detector.
## Andres task
Update `src/recognition.ts` to group recognition candidates by normalized category before building the summary.
## Expected signal
A second open pull request that changes this same file and adjusts category normalization or summary grouping should be flagged as possible parallel work. Matching file paths are evidence of overlap, not proof of duplication.
This fixture contains no production code or customer data.
