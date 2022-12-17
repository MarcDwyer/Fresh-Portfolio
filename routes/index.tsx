import { MainContainer } from "../components/MainContainer.tsx";

export default function Home() {
  return (
    <div id="main-content">
      <MainContainer path="/">
        <div className="bg-nav w-full h-full flex">
          <div className="flex flex-nowrap m-auto">
            <img
              src="https://i.imgur.com/F4iPL1v.png"
              alt="Picture of Marc Dwyer"
              className=" h-40 w-40 rounded-full ml-auto mb-auto mt-auto mr-5 border-4 border-gray-600"
            />
            <div className="m-auto flex flex-col">
              <h1 className="m-auto font-bold text-2xl">Marc Dwyer</h1>
              <h4 className="m-auto font-bold">
                Front End Engineer
              </h4>
              <h4 className="m-auto font-bold">
                marcdwyer1738@gmail.com
              </h4>
              <a
                href="/projects"
                className="font-bold text-center m-auto w-40 p-4 mt-5 bg-gray-900 bg-btnColor"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
