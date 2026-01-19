import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import {kurimodChatSimulator} from "../components/KurimodChatSimulator";
import {kurimodCodeBox} from "../components/KurimodCodeBox";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
                    {siteConfig.title}
                </Heading>
                <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title={`kurimod documentation`}
            description="Powerful add-on that monkeypatches extra useful features on Pyrogram.">
            <HomepageHeader/>
            <div className={"flex flex-col items-center justify-center"}>
                <div className={"flex flex-col gap-5 justify-center items-center w-full"}>
                    <div className={"flex w-full max-w-6xl flex-col md:flex-row justify-evenly items-stretch p-8 gap-5"}>
                        <div className={styles.advantage}>
                            Powerful add-on that monkeypatches extra useful features.
                        </div>
                        <div className={styles.advantage}>
                            Get user responses (or button clicks) effortlessly with a single line of code.
                        </div>
                        <div className={styles.advantage}>
                            Create keyboard-based interfaces for your bots with ease and fun.
                        </div>
                        <div className={styles.advantage}>
                            Effortlessly send messages with inline keyboards from your userbots.
                        </div>
                    </div>
                </div>
                <div className={"flex w-full flex-col-reverse md:flex-row gap-8 justify-center items-center"}>
                    <kurimodChatSimulator/>
                    <kurimodCodeBox/>
                </div>
                <a className={"button button--primary button--lg m-5"} href="/getting-started/intro">Get Started</a>
            </div>
        </Layout>
    );
}
