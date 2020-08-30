import React from "react";
import { graphql } from "gatsby";
import { PageLayout } from "components/structure";

function RootIndex(props) {
    return (
        <PageLayout location={props.location}>
          Hello
        </PageLayout>
    );
}

export default RootIndex;
