function DailyForecast() {
    return(
        <div className="text-white">
            <div className="text-lg mb-2">Daily forecast</div>
            <div className="w-[800px] h-[150] flex flex-row justify-between gap-4 box-border">

                {/* make one repeated card */}
                <div className="bg-slate-800 border border-solid border-white/20 p-2.5 box-border rounded-lg flex flex-col justify-center text-center">
                    <div>Tue</div>
                    <div><img src="../src/assets/images/icon-sunny.webp" alt="sunny"/></div> 
                    <div className="flex flex-row justify-between">
                        <div>68*</div>
                        <div>57*</div>
                    </div>
                </div>


                <div className="bg-slate-800 border border-solid border-white/20 p-2.5 box-border rounded-lg flex flex-col justify-center text-center">
                    <div>Tue</div>
                    <div><img src="../src/assets/images/icon-sunny.webp" alt="sunny"/></div> 
                    <div className="flex flex-row justify-between">
                        <div>68*</div>
                        <div>57*</div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-solid border-white/20 p-2.5 box-border rounded-lg flex flex-col justify-center text-center">
                    <div>Tue</div>
                    <div><img src="../src/assets/images/icon-sunny.webp" alt="sunny"/></div> 
                    <div className="flex flex-row justify-between">
                        <div>68*</div>
                        <div>57*</div>
                    </div>
                </div>
                
                <div className="bg-slate-800 border border-solid border-white/20 p-2.5 box-border rounded-lg flex flex-col justify-center text-center">
                    <div>Tue</div>
                    <div><img src="../src/assets/images/icon-sunny.webp" alt="sunny"/></div> 
                    <div className="flex flex-row justify-between">
                        <div>68*</div>
                        <div>57*</div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-solid border-white/20 p-2.5 box-border rounded-lg flex flex-col justify-center text-center">
                    <div>Tue</div>
                    <div><img src="../src/assets/images/icon-sunny.webp" alt="sunny"/></div> 
                    <div className="flex flex-row justify-between">
                        <div>68*</div>
                        <div>57*</div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-solid border-white/20 p-2.5 box-border rounded-lg flex flex-col justify-center text-center">
                    <div>Tue</div>
                    <div><img src="../src/assets/images/icon-sunny.webp" alt="sunny"/></div> 
                    <div className="flex flex-row justify-between">
                        <div>68*</div>
                        <div>57*</div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-solid border-white/20 p-2.5 box-border rounded-lg flex flex-col justify-center text-center">
                    <div>Tue</div>
                    <div><img src="../src/assets/images/icon-sunny.webp" alt="sunny"/></div> 
                    <div className="flex flex-row justify-between">
                        <div>68*</div>
                        <div>57*</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DailyForecast;