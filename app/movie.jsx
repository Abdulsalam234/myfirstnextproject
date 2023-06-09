import Link from "next/link";
import Image from "next/image";
export default function Movie({ title, id, poster_path, release_date, key }) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div>
            <h1 className="text-yellow-700 text-xl text-center">{title}</h1>
            <h2>{release_date}</h2>
            <Link href={'/asd'}>
                <Image 
                    src={imagePath + poster_path}
                    width={800}
                    height={800}
                    alt={title}>

                </Image>
            </Link>
        </div>
    )
}
