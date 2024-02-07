import { useState, useEffect } from 'react';
import { useCreateProductionLog } from '../../hooks/useCreateProductionLog';

type FormProps = {
  onClose: () => void;
};

const ProductionLogForm = ({ onClose }: FormProps) => {
  const { loading, error } = useCreateProductionLog();
  const [formData, setFormData] = useState({
    company: '',
    weekOf: '',
    properties: {
      outputGoal: 0,
      projectedOutput: 0,
      actualOutput: 0,
      quotedHours: 0,
      actualHours: 0,
      indirectHours: 0,
      totalHours: 0,
      onTimeDeliveryRate: 0,
    },
    notes: '',
  });
  const [submitError, setSubmitError] = useState('');
  const [attemptedSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'number') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        properties: { ...prevFormData.properties, [name]: parseFloat(value) },
      }));
    } else if (name in formData.properties) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        properties: { ...prevFormData.properties, [name]: value },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }

    if (attemptedSubmit) {
      validateForm();
    }
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    // if (!formData.company || !formData.weekOf) {
    //   setAttemptedSubmit(true);
    //   validateForm();
    //   return;
    // }
    // try {
    //   const newLog = await createProductionLog(formData);
    //   if (!error) {
    //     console.log('NEW');
    //     setSubmitError('');
    //     setAttemptedSubmit(false);
    //   }
    // } catch (e: unknown) {
    //   console.log('ERROR', e.message);
    //   setSubmitError(e.message || 'An error occurred while saving the production log.');
    // }
  };

  useEffect(() => {
    if (error) {
      setSubmitError(error);
    }
  }, [error]);

  const validateForm = () => {
    return formData.company && formData.weekOf;
  };

  const inputClassBase =
    'bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5';
  const inputClassError = 'border-red-500 focus:ring-red-500 focus:border-red-500';
  const companyClass = `${inputClassBase} ${!formData.company && attemptedSubmit ? inputClassError : 'border-gray-300'}`;
  const weekOfClass = `${inputClassBase} ${!formData.weekOf && attemptedSubmit ? inputClassError : 'border-gray-300'}`;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='col-span-2'>
          <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Company</label>
          <select
            name='company'
            value={formData.company}
            onChange={handleChange}
            className={companyClass}>
            <option>Select Company</option>
            <option value='three-m'>Three M</option>
            <option value='ultra-grip'>Ultra Grip</option>
          </select>
        </div>

        <div className='col-span-2'>
          <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Week Of</label>
          <input
            type='date'
            name='weekOf'
            value={formData.weekOf}
            onChange={handleChange}
            className={weekOfClass}
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Shipment Goal</label>
          <input
            name='outputGoal'
            value={formData.properties.outputGoal}
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Projected Shipments</label>
          <input
            name='projectedOutput'
            value={formData.properties.projectedOutput}
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Actual Shipments</label>
          <input
            name='actualOutput'
            value={formData.properties.actualOutput}
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>On Time Delivery</label>
          <input
            name='onTimeDeliveryRate'
            value={formData.properties.onTimeDeliveryRate}
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Quoted Hours</label>
          <input
            name='quotedHours'
            value={formData.properties.quotedHours}
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Actual Hours</label>
          <input
            name='actualHours'
            value={formData.properties.actualHours}
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Indirect Hours</label>
          <input
            name='indirectHours'
            value={formData.properties.indirectHours}
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap'>Total Hours</label>
          <input
            name='totalHours'
            value={formData.properties.totalHours}
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
        </div>

        <div className='col-span-1 md:col-span-2 lg:col-span-4 flex'>
          <div className='flex gap-2 justify-end w-full'>
            <button
              type='button'
              onClick={onClose}
              className='flex gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none'>
              Cancel
            </button>
            <button
              type='submit'
              disabled={loading}
              className='flex gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none items-center justify-center min-w-[65px]'>
              {loading ? (
                <div className='w-4 h-4 border-2 border-gray-200 rounded-full loader border-t-blue-600 animate-spin'></div>
              ) : (
                'Save'
              )}
            </button>
          </div>
        </div>
      </form>
      {submitError && <p className='text-red-500'>{submitError}</p>}
    </div>
  );
};

export default ProductionLogForm;
