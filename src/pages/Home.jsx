import React from "react";
import Banner from "../components/Banner";
import FooterMenu from "../components/FooterMenu";

function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Banner />
            </header>
            <main className='flex-grow'>
                <section className="content-container p-6 md:p-8">
                    <h2>Welcome to my website</h2>
                    <p>This is the Home page content.</p>
                </section>
            </main>
            <FooterMenu />
        </div>
    );
}

export default Home;
