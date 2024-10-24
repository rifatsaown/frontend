import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // You can now handle the form data, including files
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto p-6 bg-white rounded-lg shadow-lg "
    >
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">First Name</label>
          <input
            type="text"
            {...register('firstName', { required: 'First name is required' })}
            placeholder="First Name"
            className={`input input-bordered w-full input-primary ${
              errors.firstName && 'border-red-500'
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 ">Last Name</label>
          <input
            type="text"
            {...register('lastName', { required: 'Last name is required' })}
            placeholder="Last Name"
            className={`input input-bordered w-full input-primary ${
              errors.lastName && 'border-red-500'
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
          placeholder="Email"
          className={`input input-bordered w-full input-primary ${
            errors.email && 'border-red-500'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="block mb-2">Phone No.</label>
        <input
          type="tel"
          {...register('phone', { required: 'Phone number is required' })}
          placeholder="Phone No"
          className={`input input-bordered w-full input-primary ${
            errors.phone && 'border-red-500'
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="block mb-2">Address</label>
        <textarea
          {...register('address', { required: 'Address is required' })}
          placeholder="Address"
          className={`textarea textarea-bordered w-full textarea-primary ${
            errors.address && 'border-red-500'
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      {/* File upload for W2 Form */}
      <div className="mt-4">
        <label className="block mb-2">W2 Form (PDF)</label>
        <input
          type="file"
          {...register('w2Form', { required: 'W2 form is required' })}
          accept=".pdf"
          className={`file-input file-input-bordered w-full input-primary ${
            errors.w2Form && 'border-red-500'
          }`}
        />
        {errors.w2Form && (
          <p className="text-red-500 text-sm">{errors.w2Form.message}</p>
        )}
      </div>

      {/* File upload for Experience Letter */}
      <div className="mt-4">
        <label className="block mb-2">Experience Letter (PDF)</label>
        <input
          type="file"
          {...register('experienceLetter', {
            required: 'Experience letter is required',
          })}
          accept=".pdf"
          className={`file-input file-input-bordered w-full input-primary ${
            errors.experienceLetter && 'border-red-500'
          }`}
        />
        {errors.experienceLetter && (
          <p className="text-red-500 text-sm">
            {errors.experienceLetter.message}
          </p>
        )}
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Payment Details</h3>

      <div className="mt-4">
        <label className="block mb-2">Transaction ID</label>
        <input
          type="text"
          {...register('trxId', { required: 'Transaction ID is required' })}
          placeholder="Transaction ID"
          className={`input input-bordered w-full input-primary ${
            errors.trxId && 'border-red-500'
          }`}
        />
        {errors.trxId && (
          <p className="text-red-500 text-sm">{errors.trxId.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="block mb-2">Payment Details</label>
        <textarea
          {...register('paymentDetails', {
            required: 'Payment details are required',
          })}
          placeholder="Payment Details"
          className={`textarea textarea-bordered w-full textarea-primary ${
            errors.paymentDetails && 'border-red-500'
          }`}
        />
        {errors.paymentDetails && (
          <p className="text-red-500 text-sm">
            {errors.paymentDetails.message}
          </p>
        )}
      </div>
      {/* payment details image */}
      <div className="mt-4">
        <label className="block mb-2">Payment Details Image</label>
        <input
          type="file"
          {...register('paymentDetailsImage', { required: 'Payment details image is required' })}
          accept="image/*"
          className={`file-input file-input-bordered w-full input-primary ${
            errors.paymentDetailsImage && 'border-red-500'
          }`}
        />
      </div>

      <button type="submit" className="btn btn-primary w-full mt-6">
        Submit
      </button>
    </form>
  );
};

export default Register;
