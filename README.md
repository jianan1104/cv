![resume](https://i.imgur.com/2VlQrLB.png)

# Minimalist Resume [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjianan1104%2Fcv)

Simple web app that renders minimalist Resume with print-friendly layout, Fork from [https://github.com/BartoszJarocki/cv](https://github.com/BartoszJarocki/cv)

Built with Next.js and shadcn/ui, deployed on Vercel.

# Improvements
- Make work experience description can be a list of bullet points.
- Add `Framework and Tools`, `Programming Languages` and `Awards and Achievements` section.

# Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/ui, TailwindCss
- Auto generated Layout
- Responsive for different devices
- Optimized for Next.js and Vercel

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/jianan1104/cv.git
   ```

2. Move to the cloned directory

   ```bash
   cd cv
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the local Server:

   ```bash
   yarn dev
   ```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes

# Run with Docker

Build the container

```
docker compose build
```

Run the container

```
docker compose up -d
```

Stop the Container

```
docker compose down 
```

# License

[MIT](https://choosealicense.com/licenses/mit/)
