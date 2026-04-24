<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

<!-- BEGIN:skill-protocol -->
# Agent Skill Protocol

This repository uses a **project-level skill system** so that every AI agent
working here can reliably discover, install, and invoke specialised capabilities
without relying on external documentation or tribal knowledge.

## Skill directory layout

```
.agents/
└── skills/
    ├── <skill-name>/
    │   ├── skill.yaml   ← machine-readable manifest (required)
    │   ├── README.md    ← human/agent-readable usage guide (required)
    │   └── install.sh   ← idempotent setup script (optional)
    └── …
```

All project-level skills live under **`.agents/skills/`**.  
Each skill occupies its own sub-directory named after the skill.

---

## `skill.yaml` manifest format

```yaml
name: <skill-name>          # matches the directory name
version: "MAJOR.MINOR.PATCH"
description: >              # one-paragraph summary
  …
entry: README.md            # primary documentation file
tags: []                    # searchable labels
install: install.sh         # relative path to install script (omit if none)
requires:
  node: ">=18"              # engine constraint (semver)
  packages: []              # npm packages that must be present
```

---

## Discovery — how to find available skills

At the start of any task, an agent **must** enumerate available skills:

```bash
ls .agents/skills/
```

For each skill directory found, read `skill.yaml` to understand what it does.
Then decide which skills are relevant to the current task.

---

## Installation — how to activate a skill

Before using any skill, run its install script (if one exists):

```bash
bash .agents/skills/<skill-name>/install.sh
```

Install scripts are **idempotent** — safe to run multiple times.  
They exit `0` on success and `1` with a descriptive message on failure.

---

## Usage — how to apply a skill

1. Read the skill's `README.md` in full before writing any code.
2. Follow every checklist item listed in the README.
3. Do **not** deviate from the design tokens, patterns, or constraints defined
   by the skill without a documented reason.
4. After completing work, verify against the README's checklist.

---

## Currently available skills

| Skill | Version | When to use |
|-------|---------|-------------|
| [`ui-ux-pro-max`](.agents/skills/ui-ux-pro-max/) | 1.0.0 | Any front-end UI work — design tokens, animations, responsiveness, accessibility |
| [`nextjs-deploy`](.agents/skills/nextjs-deploy/) | 1.0.0 | Building and deploying this Next.js app to GitHub Pages |

---

## Adding a new skill

1. Create `.agents/skills/<new-skill>/`.
2. Add `skill.yaml` (required) and `README.md` (required).
3. Optionally add `install.sh` — must be idempotent and executable.
4. Update the **Currently available skills** table above.

<!-- END:skill-protocol -->
