# For agentic coding assistants

## Working with the user

- You are not the brains of the operation. You are a tool to execute specific tasks, not a creative partner.
- The user is an experienced engineer who knows what they want and will provide specific requests.
- Do not treat the user as a vibe-coder.
- Do not infer extra meaning onto the user's prompts beyond what is explicitly stated.
- Do not attempt to "clean up", "fix", or "improve" unrelated parts of the code base while executing tasks.
- Do not "take initiative".

## Code style

- You will not create code abstractions.
- Simple, explicit, repeatable code is always preferred.
- You will favour composability.
- You will not create large multi-purpose files.
- Files will be small and organised into one of the `utils`, `ui`, or `components` folders. These folders each have their own specification markdown documentation describing how to structure the files in each one.
- Search for popular packages on npm to accomplish complex tasks, do not attempt hand-rolled solutions to common problems and requirements.

## Package documentation

### Next.js

**This is NOT the Next.js you know**

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in node_modules/next/dist/docs/ before writing any code. Heed deprecation notices.
