import Heading from "@/components/Heading";

export default function PostPage() {
    return (
        <>
            <Heading>Belajar NextJS</Heading>
            <img
                src="/images/image-1.jpg"
                alt="" width={840}
                height={660}
                className="mb-2 rounded-md"
            />
            <p>Halaman dari blog</p>
        </>
    )
}