import React from 'react';
import { useParams } from 'react-router-dom';
 
const withRouter = WrappedComponent => props => {
  const params = useParams();
  console.log(params,"param");
 console.log(WrappedComponent);
  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};
 
export default withRouter;