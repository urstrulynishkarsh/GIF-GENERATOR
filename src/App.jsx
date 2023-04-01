import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return(
    <div className="w-full h-screen flex flex-col relative bg-slate-300 overflow-x-hidden items-center">
   
      <h1 className="bg-white absolute w-11/12 text-center mt-[40px] py-2 rounded-md text-4xl font-bold " >Random Gifs</h1>
    
    <div className="flex flex-col w-full items-center gap-y-10 mt-[8rem]">
    <Random/>
    <Tag/>
    </div>
    
    
    </div>) ;
}
