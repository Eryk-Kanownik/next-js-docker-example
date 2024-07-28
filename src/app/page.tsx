export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24 h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Very first Docker example of Next.JS
      </h1>
      <div className="">
        <h2>Dockerfile</h2>
        <div className="w-[60vw]  flex flex-col rounded-md p-4 bg-slate-900">
          <code>FROM node:latest</code>
          <code>WORKDIR /app</code>
          <code>COPY package.json ./</code>
          <code>RUN npm install</code>
          <code>COPY . .</code>
          <code>RUN npm run build</code>
          <code>EXPOSE 3000</code>
          <code>
            CMD {"["}
            {`"`}npm{`"`}, {`"`}start{`"`}
            {"]"}
          </code>
        </div>
      </div>
      <div>
        <h2>Commands</h2>
        <div className="w-[60vw] flex flex-col rounded-md p-4 bg-slate-900">
          <code>docker build -t (Name of image) .</code>
          <code>docker run -p (port:port) (Name of image)</code>
        </div>
      </div>
    </main>
  );
}
