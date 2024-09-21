import TemplateCard from "./TemplateCard";
import TemplateImage from '../assets/template1.jpg';

function Template (){

    return(
        <div className="bg-white pt-24">
            <h1 className="text-center text-[30px] font-medium">Pick the Portfolio Template You Love</h1>

            <div className="flex align-middle justify-center mt-10 relative">
                <input type="search" placeholder="Search all templates..." className="bg-white w-2/5 h-10 rounded-3xl px-8 border border-sky-500" />
                <button className="absolute right-2/3 top-0 mt-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                    </svg>
                </button>
            </div>

            <div className="mt-10 bg-slate-50 px-6 pt-12 border-t border-slate-100 pb-10">
                <h2 className="text-[20px] mb-5">All Portfolio Templates</h2>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
                    <TemplateCard url={TemplateImage} name="Design Portfolio" />
                    <TemplateCard url={TemplateImage} name="Design Portfolio" />
                    <TemplateCard url={TemplateImage} name="Design Portfolio" />
                    <TemplateCard url={TemplateImage} name="Design Portfolio" />
                    <TemplateCard url={TemplateImage} name="Design Portfolio" />
                    <TemplateCard url={TemplateImage} name="Design Portfolio" />
                    <TemplateCard url={TemplateImage} name="Design Portfolio" />
                </div>
            </div>
        </div>
    )
}

export default Template;