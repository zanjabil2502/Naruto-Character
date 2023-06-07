import ProgressBar from 'react-bootstrap/ProgressBar';

export function NarutoUzumaki() {
    const Ninjutsu = (4/5)*100
    const Taijutsu = (3.5/5)*100
    const Intelligence = (3/5)*100
    const Strength = (3.5/5)*100
    const Speed = (3.5/5)*100

    return (
        <>
        <div className="w-full h-14 border-t-4 border-t-white slide-right ">
            <span className="text-md font-bold">Konohagakure</span>
        </div>
        <span className="text-5xl font-[800] leading-10 fade-bottom">
            UZUMAKI <br/> NARUTO
        </span>
        <span className='text-sm pr-20 mt-2 fade-bottom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </span>
        <div className="w-full h-full flex flex-col mt-4 gap-y-4 fade-bottom">
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Ninjutsu</span>
                    <span>{Ninjutsu}</span>
                </div>
                <ProgressBar now={Ninjutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Taijutsu</span>
                    <span>{Taijutsu}</span>
                </div>
                <ProgressBar now={Taijutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Intelligence</span>
                    <span>{Intelligence}</span>
                </div>
                <ProgressBar now={Intelligence} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Strength</span>
                    <span>{Strength}</span>
                </div>
                <ProgressBar now={Strength} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Speed</span>
                    <span>{Speed}</span>
                </div>
                <ProgressBar now={Speed} variant='dark' className='drop-shadow-lg'/>
            </div>
        </div>
        </>
    )
}

export function MinatoNamikaze() {
    const Ninjutsu = (4.5/5)*100
    const Taijutsu = (4/5)*100
    const Intelligence = (4/5)*100
    const Strength = (3.5/5)*100
    const Speed = (5/5)*100

    return (
        <>
        <div className="w-full h-14 border-t-4 border-t-white slide-right ">
            <span className="text-md font-bold">Konohagakure</span>
        </div>
        <span className="text-5xl font-[800] leading-10 fade-bottom">
            MINATO <br/> NAMIKAZE
        </span>
        <span className='text-sm pr-20 mt-2 fade-bottom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </span>
        <div className="w-full h-full flex flex-col mt-4 gap-y-4 fade-bottom">
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Ninjutsu</span>
                    <span>{Ninjutsu}</span>
                </div>
                <ProgressBar now={Ninjutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Taijutsu</span>
                    <span>{Taijutsu}</span>
                </div>
                <ProgressBar now={Taijutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Intelligence</span>
                    <span>{Intelligence}</span>
                </div>
                <ProgressBar now={Intelligence} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Strength</span>
                    <span>{Strength}</span>
                </div>
                <ProgressBar now={Strength} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Speed</span>
                    <span>{Speed}</span>
                </div>
                <ProgressBar now={Speed} variant='dark' className='drop-shadow-lg'/>
            </div>
        </div>
        </>
    )
}

export function SasukeUchiha() {
    const Ninjutsu = (5/5)*100
    const Taijutsu = (3.5/5)*100
    const Intelligence = (3.5/5)*100
    const Strength = (3.5/5)*100
    const Speed = (4.5/5)*100

    return (
        <>
        <div className="w-full h-14 border-t-4 border-t-white slide-right ">
            <span className="text-md font-bold">Konohagakure</span>
        </div>
        <span className="text-5xl font-[800] leading-10 fade-bottom">
            SASUKE <br/> UCHIHA
        </span>
        <span className='text-sm pr-20 mt-2 fade-bottom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </span>
        <div className="w-full h-full flex flex-col mt-4 gap-y-4 fade-bottom">
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Ninjutsu</span>
                    <span>{Ninjutsu}</span>
                </div>
                <ProgressBar now={Ninjutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Taijutsu</span>
                    <span>{Taijutsu}</span>
                </div>
                <ProgressBar now={Taijutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Intelligence</span>
                    <span>{Intelligence}</span>
                </div>
                <ProgressBar now={Intelligence} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Strength</span>
                    <span>{Strength}</span>
                </div>
                <ProgressBar now={Strength} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Speed</span>
                    <span>{Speed}</span>
                </div>
                <ProgressBar now={Speed} variant='dark' className='drop-shadow-lg'/>
            </div>
        </div>
        </>
    )
}

export function SakuraHaruno() {
    const Ninjutsu = (3/5)*100
    const Taijutsu = (3/5)*100
    const Intelligence = (4/5)*100
    const Strength = (3/5)*100
    const Speed = (3/5)*100

    return (
        <>
        <div className="w-full h-14 border-t-4 border-t-white slide-right ">
            <span className="text-md font-bold">Konohagakure</span>
        </div>
        <span className="text-5xl font-[800] leading-10 fade-bottom">
            SAKURA <br/> HARUNO
        </span>
        <span className='text-sm pr-20 mt-2 fade-bottom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </span>
        <div className="w-full h-full flex flex-col mt-4 gap-y-4 fade-bottom">
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Ninjutsu</span>
                    <span>{Ninjutsu}</span>
                </div>
                <ProgressBar now={Ninjutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Taijutsu</span>
                    <span>{Taijutsu}</span>
                </div>
                <ProgressBar now={Taijutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Intelligence</span>
                    <span>{Intelligence}</span>
                </div>
                <ProgressBar now={Intelligence} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Strength</span>
                    <span>{Strength}</span>
                </div>
                <ProgressBar now={Strength} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Speed</span>
                    <span>{Speed}</span>
                </div>
                <ProgressBar now={Speed} variant='dark' className='drop-shadow-lg'/>
            </div>
        </div>
        </>
    )
}

export function KakashiHatake() {
    const Ninjutsu = (5/5)*100
    const Taijutsu = (4.5/5)*100
    const Intelligence = (5/5)*100
    const Strength = (3.5/5)*100
    const Speed = (4.5/5)*100

    return (
        <>
        <div className="w-full h-14 border-t-4 border-t-white slide-right ">
            <span className="text-md font-bold">Konohagakure</span>
        </div>
        <span className="text-5xl font-[800] leading-10 fade-bottom">
            KAKASHI <br/> HATAKE
        </span>
        <span className='text-sm pr-20 mt-2 fade-bottom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </span>
        <div className="w-full h-full flex flex-col mt-4 gap-y-4 fade-bottom">
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Ninjutsu</span>
                    <span>{Ninjutsu}</span>
                </div>
                <ProgressBar now={Ninjutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Taijutsu</span>
                    <span>{Taijutsu}</span>
                </div>
                <ProgressBar now={Taijutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Intelligence</span>
                    <span>{Intelligence}</span>
                </div>
                <ProgressBar now={Intelligence} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Strength</span>
                    <span>{Strength}</span>
                </div>
                <ProgressBar now={Strength} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Speed</span>
                    <span>{Speed}</span>
                </div>
                <ProgressBar now={Speed} variant='dark' className='drop-shadow-lg'/>
            </div>
        </div>
        </>
    )
}

export function HinataHyuga() {
    const Ninjutsu = (3/5)*100
    const Taijutsu = (3.5/5)*100
    const Intelligence = (3.5/5)*100
    const Strength = (1.5/5)*100
    const Speed = (2.5/5)*100

    return (
        <>
        <div className="w-full h-14 border-t-4 border-t-white slide-right ">
            <span className="text-md font-bold">Konohagakure</span>
        </div>
        <span className="text-5xl font-[800] leading-10 fade-bottom">
            HINATA <br/> HYUGA
        </span>
        <span className='text-sm pr-20 mt-2 fade-bottom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </span>
        <div className="w-full h-full flex flex-col mt-4 gap-y-4 fade-bottom">
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Ninjutsu</span>
                    <span>{Ninjutsu}</span>
                </div>
                <ProgressBar now={Ninjutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Taijutsu</span>
                    <span>{Taijutsu}</span>
                </div>
                <ProgressBar now={Taijutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Intelligence</span>
                    <span>{Intelligence}</span>
                </div>
                <ProgressBar now={Intelligence} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Strength</span>
                    <span>{Strength}</span>
                </div>
                <ProgressBar now={Strength} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Speed</span>
                    <span>{Speed}</span>
                </div>
                <ProgressBar now={Speed} variant='dark' className='drop-shadow-lg'/>
            </div>
        </div>
        </>
    )
}

export function RockLee() {
    const Ninjutsu = (0.5/5)*100
    const Taijutsu = (5/5)*100
    const Intelligence = (2/5)*100
    const Strength = (4.5/5)*100
    const Speed = (4.5/5)*100

    return (
        <>
        <div className="w-full h-14 border-t-4 border-t-white slide-right ">
            <span className="text-md font-bold">Konohagakure</span>
        </div>
        <span className="text-5xl font-[800] leading-10 fade-bottom">
            ROCK <br/> LEE
        </span>
        <span className='text-sm pr-20 mt-2 fade-bottom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </span>
        <div className="w-full h-full flex flex-col mt-4 gap-y-4 fade-bottom">
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Ninjutsu</span>
                    <span>{Ninjutsu}</span>
                </div>
                <ProgressBar now={Ninjutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Taijutsu</span>
                    <span>{Taijutsu}</span>
                </div>
                <ProgressBar now={Taijutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Intelligence</span>
                    <span>{Intelligence}</span>
                </div>
                <ProgressBar now={Intelligence} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Strength</span>
                    <span>{Strength}</span>
                </div>
                <ProgressBar now={Strength} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Speed</span>
                    <span>{Speed}</span>
                </div>
                <ProgressBar now={Speed} variant='dark' className='drop-shadow-lg'/>
            </div>
        </div>
        </>
    )
}

export function ShikamaruNara() {
    const Ninjutsu = (3.5/5)*100
    const Taijutsu = (2/5)*100
    const Intelligence = (5/5)*100
    const Strength = (2.5/5)*100
    const Speed = (2.5/5)*100

    return (
        <>
        <div className="w-full h-14 border-t-4 border-t-white slide-right ">
            <span className="text-md font-bold">Konohagakure</span>
        </div>
        <span className="text-5xl font-[800] leading-10 fade-bottom">
            SHIKAMARU <br/> NARA
        </span>
        <span className='text-sm pr-20 mt-2 fade-bottom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </span>
        <div className="w-full h-full flex flex-col mt-4 gap-y-4 fade-bottom">
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Ninjutsu</span>
                    <span>{Ninjutsu}</span>
                </div>
                <ProgressBar now={Ninjutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Taijutsu</span>
                    <span>{Taijutsu}</span>
                </div>
                <ProgressBar now={Taijutsu} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Intelligence</span>
                    <span>{Intelligence}</span>
                </div>
                <ProgressBar now={Intelligence} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Strength</span>
                    <span>{Strength}</span>
                </div>
                <ProgressBar now={Strength} variant='dark' className='drop-shadow-lg'/>
            </div>
            <div className="w-full h-fit flex-col pr-20">
                <div className="text-md font-bold flex justify-between">
                    <span>Speed</span>
                    <span>{Speed}</span>
                </div>
                <ProgressBar now={Speed} variant='dark' className='drop-shadow-lg'/>
            </div>
        </div>
        </>
    )
}