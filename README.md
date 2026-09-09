# Skillmate SecurityJobs

A lightweight cybersecurity job dashboard focused on verified fresher and early-career openings in India.

Live site: https://skillmatedev.github.io/securityjobs/

## Persistent data

- `jobs.json`: active verified vacancies
- `jobs-archive.json`: closed or expired vacancies; records are never deleted
- `job-history.json`: append-only vacancy event history
- `quarantine.json`: unresolved candidates awaiting verification
- `source-registry.json`: permanent portal, ATS, employer and CERT-In source catalogue
- `run-reports.json`: append-only hourly coverage reports
- `data-policy.json`: preservation and publishing safeguards

The hourly updater must load and merge all existing datasets before writing. A vacancy can leave the active feed only with vacancy-specific evidence and must then be retained in the archive with the reason and date. Temporary source failures never justify removing a record.
