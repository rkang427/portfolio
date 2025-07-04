About This Project
---
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

[This site](https://rheekang.vercel.app/)
 is dedicated to my portfolio and personal odyssey in discovering my niche in Software Engineering.

---
## [Workflow](https://trello.com/invite/b/6854a544f3ed491ab956ae6d/ATTI680a676f5390bda653e8c8a9fe816d40F50900E0/my-trello-board)
```mermaid
graph TD
  Design --> Implement
  Implement --> Deploy
  ```
---
## UML
### Contact Form Component Diagram
```mermaid
graph TD
  subgraph Browser [Client's Browser]
    A[Name, E-mail, Message UI Components]
    A -->|Press Submit| B(ContactForm)
  end

  subgraph frontend [Next.js/React App]
    B -->|POST /api/contact| C[API Route]
    C --> D[Nodemailer]
  end 

  D -->|Simple Mail Transfer Protocol| E[Gmail SMTP Server]
  E -->|Delivers E-mail| F[Rhee's Inbox]

  classDef blackText fill:#ffffff,stroke:#000000,color:#000000;

  class A,B,C,D,E,F blackText;

 style A fill:#fef9c3,stroke:#eab308,stroke-width:2px
  style B fill:#fef9c3,stroke:#eab308,stroke-width:2px
  style C fill:#e0f2fe,stroke:#0284c7,stroke-width:2px
  style D fill:#f3e8ff,stroke:#9333ea,stroke-width:2px
  style E fill:#fef2f2,stroke:#dc2626,stroke-width:2px
  style F fill:#d1fae5,stroke:#059669,stroke-width:2px

```
[//]: # (https://mermaid.live/edit#pako:eNpNjUEOgjAURK_SzBoJ0tZKFyYKR3BlumlsFaK0pEKiEu5uITH6VzOZN39GnL2xkLgG3dXkWClHyJ6sVjtymOVhkSWSCDQGsg-DTdDa0OrZYpwhhb62rVWQURodbgrKTbHTaXfyvv3Wgh-uNeRF3x_RDZ3Rva0aHad_iHXGhtIProfkywfIEU9IKlhK6TajLOOCbzhjCV6QbJOyGIkip3khCppPCd7LZpZuBc_-bj19AH6QRM4&#41)
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

---
## Commit Message Guidelines

Following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for clarity and consistency.

### Format

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

### Common Types

- **feat:** A new feature
- **fix:** A bug fix
- **docs:** Documentation changes
- **style:** Code style (formatting, missing semi-colons, etc)
- **refactor:** Code change that neither fixes a bug nor adds a feature
- **test:** Adding or updating tests
- **chore:** Changes to build process or auxiliary tools

### Examples

- feat(auth): add login with OAuth
- fix(parser): handle empty arrays
- docs: update README for install instructions
- chore: update dependencies

---
## License
[MIT](https://github.com/rkang427/portfolio/LICENSE)

MIT © RheeKang
