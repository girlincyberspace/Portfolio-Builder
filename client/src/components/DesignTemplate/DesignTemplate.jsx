import DesignTemplate1 from '../../assets/DesignTemplate1.png';

function GraphicDesign (){
    
    return(
        <div className="bg-slate-50">
            <div>
                <p className="text-center text-[20px] mt-2">GRAPHIC DESIGN PORTFOLIO</p>
                <img src={DesignTemplate1} alt='project 1' />
                
            </div>
        </div>
    )
};

export default GraphicDesign;