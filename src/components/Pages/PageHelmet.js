import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

// theres always propTypes at the top of the default export and an optional defaultProps.

// #region initalizations
const propTypes = {
  title: PropTypes.string,
};
const defaultProps = {
  title: "IAF Certification Validation - IAF CertSearch",
};
// #endregion

// dont export default
function PageHelmet(props) {
  const { title } = props;
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

// propTypes, props exports here
PageHelmet.propTypes = propTypes;
PageHelmet.defaultProps = defaultProps;
export default PageHelmet;
