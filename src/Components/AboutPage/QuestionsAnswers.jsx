
import {BsQuestionCircle} from 'react-icons/bs'

const QuestionsAnswers = () => {
    return (
      <div className="max-w-screen-xl px-5 mx-auto my-20 mb-20">
        {/* title and descption */}
        <div className="text-center md:w-9/12 mx-auto">
          <h1 className="text-3xl font-semibold">Questions & Answers</h1>
          <p className="text-lg mt-3">
            Our products popularity stems from its unmatched quality,
            exceptional value, and continuous innovation. Customers trust our
            reliability, appreciate our affordability, and rely on our excellent
            customer support. With a user-friendly design and loyal customer
            base, we consistently exceed expectations
          </p>
        </div>
        {/* main part */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold">
                What makes your product stand out from competitors?
              </h1>
              <p className="text-justify">
                Our product stands out due to its superior quality, affordable
                pricing, and responsive customer support, giving customers a
                complete, hassle-free experience.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2 dark:bg-[#09867E]">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold">
                How do you ensure the reliability of your product?
              </h1>
              <p className="text-justify">
                We rigorously test and maintain our product to ensure its
                reliability, continually addressing any issues and proactively
                enhancing its performance.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2 dark:bg-[#09867E]">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold">
                What customer benefits can users expect from your product?
              </h1>
              <p className="text-justify">
                Users can expect increased efficiency, cost savings, and
                improved user experience with our product, all backed by our
                commitment to customer satisfaction.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2 dark:bg-[#09867E]">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold">
                How do you stay innovative and up-to-date in your industry?
              </h1>
              <p className="text-justify">
                We regularly invest in research and development, listening to
                customer feedback, and staying informed about industry trends to
                consistently bring innovation to our product.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default QuestionsAnswers;