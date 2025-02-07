import Link from "next/link";
const Thankyou = () => {
  return (
    <>
      <section className="thankyou">
        <div>
          <h1 className="text-sm md:text-lg lg:text-4xl">
            Thank you for registering! We appreciate your participation and look
            forward to your involvement.
          </h1>
          <Link href="/" className="btn btn-action">
            Back to registration menu
          </Link>
        </div>
      </section>
    </>
  );
};

export default Thankyou;
