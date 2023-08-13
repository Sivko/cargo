import { fields } from "../config";

const defaultInvoce = {
  data: {
    type: "deals",
    attributes: {
      name: "",
      customs: {},
    },
    relationships: {
      stage: {
        data: {
          type: "deal-stages",
          id: fields["idStageInvoce"],
        },
      },
    },
  },
};

export default defaultInvoce;
