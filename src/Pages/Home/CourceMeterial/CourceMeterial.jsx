const CourseMaterial = () => {
  const pdfMaterials = [
    { name: 'Lecture Notes', url: '/path/to/lecture-notes.pdf' },
    { name: 'Assignment Guide', url: '/path/to/assignment-guide.pdf' },
    { name: 'Reference Material', url: '/path/to/reference-material.pdf' },
  ];

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Course Material
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Course PDFs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pdfMaterials.map((pdf, index) => (
            <a
              key={index}
              href={pdf.url}
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              Download {pdf.name}
            </a>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Course Video
      </h2>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/z_EhAiRuKjk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/z_EhAiRuKjk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterial;
