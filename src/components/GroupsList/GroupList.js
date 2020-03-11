import React from "react";
import PropTypes from "prop-types";
import Group from "../Group/Group.js";

const GroupsList = ({ detailRoute }) => {
  return (
    <>
      <ul className="groups">
        {[].map(group => (
          <Group group={group} key={group.id} detailRoute={detailRoute} />
        ))}
      </ul>
    </>
  );
};

GroupsList.propTypes = {
  detailRoute: PropTypes.string.isRequired
};

export default GroupsList;
