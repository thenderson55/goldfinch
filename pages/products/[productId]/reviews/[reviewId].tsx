import React from "react";
import { useRouter } from "next/router";
function ReviewDetail() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </div>
  );
}

export default ReviewDetail;
