import { Wrapper } from "@layout/index";
import SEO from "@components/seo";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ShopDetails() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
  return (
    <Wrapper>
      <SEO pageTitle={"Product"} />
    </Wrapper>
  );
}
