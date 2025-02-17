import React from "react";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <h1 style={styles.title} className="text-3xl font-bold text-gray-900">
        {title}
      </h1>
      {subtitle && (
        <p style={styles.subtitle} className="text-lg text-gray-600 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  title: {
    textTransform: "capitalize",
    fontSize: "var(--font-size-xxl)",
    color: "var(--secondary-color)",
  },
  subtitle: {
    textTransform: "capitalize",
    fontSize: "var(--font-size-small)",
    color: "var(--secondary-color)",
  },
};
export default PageTitle;
