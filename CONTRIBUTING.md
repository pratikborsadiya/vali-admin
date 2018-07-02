# Contributing to Vali Admin

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Vali Admin. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Fixing a bug](#fixing-a-bug)
  * [Providing Enhancements](#providing-enhancements)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)

## Code of Conduct

This project and everyone participating in it is governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [pratikborsadiya@gmail.com](mailto:pratikborsadiya@gmail.com).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Vali Admin. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check existing open issues and make sure the issue you are reporting is not already reported and open. When you are creating a bug report, please fill out the required template, the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines)**.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.

### Suggesting Enhancements

Just like bugs enhancements can also be suggested as [GitHub issues](https://guides.github.com/features/issues/).

#### How Do I Submit A (Good) Enhancement Suggestion ?

* **Use a clear and descriptive title** for the suggestion you are proposing.
* **Include related screenshots or animated GIFs** for better clarity.
* **Describe how would it be useful** for the users.

### Fixing a bug

* If you are considering to fix an open issue please comment on the issue that you are working on fixing the issue and how are you planning to fix it. 
* Create a new issue if the one you are fixing is not already open and then comment on the issue that you are fixing it. 
* This will let the contributors know that the specific issue is currently being fixed and they shold wait sometime before trying to fix the same issue themselves.

### Providing Enhancements
* If you are planning to propose a new feature please open an issue for the same feature request prior to starting work on a feature.
* This will help the contributors and maintainers provide feedback and support for the enhancement you are providing.

### Pull requests
Please, go through these steps before you submit a pull request.

1. Make sure that your pull request is not a duplicate.
2. If not, then make sure that:

	2.1. You have done your changes in a separate branch. Branches MUST have descriptive names that start with either the `fix/` or `feature/` prefixes. Good examples are: `fix/signin-issue` or `feature/issue-templates`.

	2.2. You have a descriptive commit message with a short title (first line).

	2.2. You have created one pull request for one purpose only. Create separate branches and separate pull requests for each newly introduced feature or for each fixed issue.

	2.3. You have only one commit (if not, squash them into one commit).

3. **After** these steps, you're ready to open a pull request.

	3.1. Your pull request MUST NOT target the `master` branch on this repository. Instead target the next version branch. For eg. If the [current stable version](https://github.com/pratikborsadiya/vali-admin/releases/latest) of the theme is `2.3.1` then target the branch for the next version `2.3.2` or `3.0.0` if the next version is a major release. Your changes will be merged in master branch when the next release will happen.

	3.2. Give a descriptive title to your PR.

	3.3. Provide a description of your changes.

	3.4. Put `closes #XXXX` in your comment to auto-close the issue that your PR fixes.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
