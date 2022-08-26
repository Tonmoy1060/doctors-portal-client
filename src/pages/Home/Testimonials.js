import React from "react";
import quote from "../../assets/icons/quote.svg";
import Review from "./Review";
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people1,
      name: 'Winson Herry',
      location: 'California'
    },
    {
      _id: 2,
      comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people2,
      name: 'Winson Herry',
      location: 'California'
    },
    {
      _id: 3,
      comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people3,
      name: 'Winson Herry',
      location: 'California'
    },
  ]
  return (
    <section className="mt-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-primary font-bold text-xl">Testimonial</h1>
          <h1 className="text-3xl">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-14 p-10">
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>
    </section>
  );
};

export default Testimonials;
