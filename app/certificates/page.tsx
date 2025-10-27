export default function Certificates() {
  return (
    <div className="flex flex-col items-end gap-6 pl-6 pb-4 portfolio-certificates-container">
      <div className="flex flex-row items-center w-full p-4 portfolio-certificates-row">
        <div className="flex flex-row flex-wrap justify-end gap-4 w-full">
          <img
            className="portfolio-certificate zoomable"
            src="assets/images/certificates/2024a.jpg"
          />
          <img
            className="portfolio-certificate zoomable"
            src="assets/images/certificates/2024b.jpg"
          />
          <img
            className="portfolio-certificate zoomable"
            src="assets/images/certificates/ai.jpg"
          />
          <img
            className="portfolio-certificate zoomable"
            src="assets/images/certificates/certzarz.jpg"
          />
          <img
            className="portfolio-certificate zoomable"
            src="assets/images/certificates/lifebalance.jpg"
          />
        </div>
        <div className="text-30 font-normal p-6 portfolio-certificates-year">
          2024
        </div>
      </div>

      <div className="flex flex-row items-center w-full p-4 portfolio-certificates-row">
        <div className="flex flex-row flex-wrap justify-end gap-4 w-full">
          <img
            className="portfolio-certificate zoomable"
            src="assets/images/certificates/IMG_20200624_221010.jpg"
          />
          <img
            className="portfolio-certificate zoomable"
            src="assets/images/certificates/IMG_20200624_221025.jpg"
          />
          <img
            className="portfolio-certificate zoomable"
            src="assets/images/certificates/IMG_20200624_221045.jpg"
          />
          <img
            className="portfolio-certificate zoomable"
            src="assets/images/certificates/IMG_20200624_221151.jpg"
          />
        </div>
        <div className="text-30 font-normal p-6 portfolio-certificates-year">
          2020
        </div>
      </div>
    </div>
  );
}
