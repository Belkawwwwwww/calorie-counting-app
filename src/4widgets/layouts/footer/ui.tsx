// import {messengers} from '@/4widgets/layouts/footer/config/messengers'
import Link from "next/link";
import Image from "next/image";
export const Footer =() => {
    return (
        <footer>
            <div>
                <div>
                    <p>Телефон</p>
                    <p>+79826004039</p>
                </div>
                <div>
                    <div>Контакты:</div>
                    <div>
                        {/*{*/}
                        {/*    messengers.map((messenger) => (*/}
                        {/*        <Link*/}
                        {/*            key={messenger.path}*/}
                        {/*            href={messenger.link}*/}
                        {/*            target="_blank"*/}
                        {/*        >*/}
                        {/*            <Image*/}
                        {/*                src={`/messengers/${messenger.path}`}*/}
                        {/*                alt={messenger.path}*/}
                        {/*                width={40}*/}
                        {/*                height={40}*/}
                        {/*            />*/}
                        {/*        </Link>*/}
                        {/*    ))*/}
                        {/*}*/}
                    </div>
                </div>
            </div>
        </footer>
    )
}