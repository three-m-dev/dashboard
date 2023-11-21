import { useParams } from "react-router";
import { ICareerListing } from "../../interfaces/ICommon";

type Props = {
  listings: ICareerListing[];
};

const CareerDetails = (props: Props) => {
  const { id } = useParams<{ id: string }>();

  const listing = props.listings.find(
    (listing) => listing.id.toString() === id,
  );

  if (!listing) {
    return;
  }

  const renderListItems = (items: string[]) => {
    if (Array.isArray(items) && items.length > 0) {
      return items.map((item, index) => <li key={index}>{item}</li>);
    }
    return <li>None listed</li>;
  };

  return (
    <>
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-3xl font-semibold">Career Details</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Company
            </label>
            <div className="mb-4">{listing.company}</div>
          </div>

          <div className="col-span-3">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Department
            </label>
            <div className="mb-4">{listing.department}</div>
          </div>

          <div className="col-span-3">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Employment Type
            </label>
            <div className="mb-4">{listing.employmentType}</div>
          </div>

          <div className="col-span-3">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Location
            </label>
            <div className="mb-4">{listing.location}</div>
          </div>

          <div className="col-span-6">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Title
            </label>
            <div className="mb-4">{listing.title}</div>
          </div>

          <div className="col-span-3">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Starting At
            </label>
            <div className="mb-4">{"$" + listing.startingAt}</div>
          </div>

          <div className="col-span-3">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Compensation Type
            </label>
            <div className="mb-4">{listing.compensationType}</div>
          </div>

          <div className="col-span-12">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Description
            </label>
            <div className="mb-4">{listing.description}</div>
          </div>

          <div className="col-span-12">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Benefits
            </label>
            <ul className="mb-4 list-disc pl-5">
              {renderListItems(listing.benefits)}
            </ul>
          </div>

          <div className="col-span-12">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Requirements
            </label>
            <ul className="mb-4 list-disc pl-5">
              {renderListItems(listing.requirements)}
            </ul>
          </div>

          <div className="col-span-12">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Qualifications
            </label>
            <ul className="mb-4 list-disc pl-5">
              {renderListItems(listing.qualifications)}
            </ul>
          </div>

          <div className="col-span-12">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Last Updated
            </label>
            <div className="mb-4">
              {"On " + listing.updatedAt + " by" + listing.updatedBy}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 flex max-w-4xl justify-end">
        <button className="flex items-center gap-1 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-500 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          New Team Member
        </button>
      </div>
    </>
  );
};

export default CareerDetails;
