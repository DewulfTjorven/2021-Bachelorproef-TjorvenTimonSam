import React from "react";
import PropTypes from "prop-types";
import Group from "../Group/Group.js";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../hooks/useStores";

const GroupsList = ({ detailRoute }) => {
  const { dataStore } = useStores();
  return useObserver(() => (
    <>
      <ul className="groups">
        {dataStore.groups.map(group => (
          <Group group={group} key={group.id} detailRoute={detailRoute} />
        ))}
      </ul>
    </>
  ));
};

GroupsList.propTypes = {
  detailRoute: PropTypes.string.isRequired
};

export default GroupsList;
