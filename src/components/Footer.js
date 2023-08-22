import s from './s.module.css';
import { Link } from '@mui/material';

export default function Footer() {
    return (
        <footer className={s.footer}>
            <nav className={s.nav}>
                <span className={s.item}>
                    Contact: <span className={s.contact}>team@crosschainlabs.tech</span>
                </span>
            </nav>
            <Link
                className={s.item}
                href="https://www.crosschainlabs.tech/"
                target="_blank"
                rel="noopener"

            >
                Powered by CrossChain Labs
            </Link>
        </footer>
    );
}
