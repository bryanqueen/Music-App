import React from "react";

const variantClasses = {
  h1: "font-semibold sm:text-[48px] md:text-[48px] text-[72px]",
  h2: "font-semibold sm:text-[42px] md:text-[48px] text-[56px]",
  h3: "font-semibold sm:text-[36px] md:text-[38px] text-[40px]",
  h4: "font-semibold sm:text-[28px] md:text-[30px] text-[32px]",
  h5: "font-semibold sm:text-[25.75px] md:text-[27.75px] text-[29.75px]",
  h6: "font-semibold sm:text-[20px] md:text-[22px] text-[24px]",
  body1: "font-semibold sm:text-[18.31px] md:text-[20.31px] text-[22.31px]",
  body2: "font-semibold text-[20px]",
  body3: "font-semibold text-[18.59px]",
  body4: "text-[16px]",
  body5: "font-semibold text-[14.87px]",
  body6: "text-[14px]",
  body7: "font-normal text-[13.01px]",
  body8: "text-[12px]",
  body9: "font-bold text-[110px] sm:text-[48px] md:text-[48px]",
  body10: "font-normal text-[11.16px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
