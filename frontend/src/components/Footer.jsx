const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 flex justify-between">
            <div>
                <img
                    src="/logo def aurores COLOR traç.png"
                    width={200}
                    height={100}
                    alt="logo color"
                />
            </div>

            <div className='flex flex-col justify-center'>
                <div>
                    <p className='font-bold'>Direcció:</p>
                    <p>Carrer de Ramon Albó, 59, Nou</p>
                    <p>Barris, 08027 Barcelona</p>
                </div>

                <div>
                    <p className='font-bold mt-4'>Contacte:</p>
                    <p>Mail: kasjdbakjsdbaskjdb@gmail.com</p>
                    <p>Telèfon: +34 613 006 060</p>
                </div>
            </div>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5983.1363599790775!2d2.174477376567592!3d41.42689159354303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bd2e8ae644ad%3A0x6c64f5a23c240eab!2sAurores!5e0!3m2!1ses!2ses!4v1712929423866!5m2!1ses!2ses" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </footer>
    );
}

export default Footer;
