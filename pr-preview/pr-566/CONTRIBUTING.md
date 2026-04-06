# Contributor's guidelines

These guidelines create a frameowork for contributing to the repository for both contributors and reviewers. The goal is to provide a predictable workflow, minimise issues caused by suboptimal coordination and maximise the security of the website and of the binaries and links it serves.

## Pull requests

- Commits should be [atomic](https://en.wikipedia.org/wiki/Atomic_commit#Atomic_commit_convention) and diffs should be easy to read. The contributor should not mix formatting fixes with non-formatting commits
- If a particular commit references another issue, the contributor should add a reference. For example "See #123", or "Fixes #123". This will help us resolve tickets when we merge into `master`
- Pull requests shouldn't include merge commits
- Pull requests should include references to any relative discussion outside of the repository
- In case of changes to an already open PR, the contributor should signal the status of the pull request (ready for review or draft) to let maintainers know how to proceed (merge, wait for review, etc)

 ## Maintainance/reviewing

- Maintainers should not merge pull requests in less than 24 hours (1 day) after it being signaled as ready to be merged, unless deemed urgent by the maintainers.
- Maintainers will merge pull requests by "squashing and merging" or "rebase and merging", to avoid merge commit being added to the repository.
- Pull requests will need at least 1 review from a maintainer or reputable contributor before being ready to be merged
- Maintainers should not merge their own patches except in exceptional cases, such as non-responsiveness from other Maintainers for an extended period (more than 1-2 days).
