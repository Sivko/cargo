import { fields } from '../config'

export const defaultSlot = {
  data: {
    type: 'deals',
    attributes: {
      name: "Slot",
      description: '',
      customs: {
        [fields["length"]]: 0,
        [fields["width"]]: 0,
        [fields["height"]]: 0,
        [fields["weight"]]: 0,
        [fields["barcode"]]: '',
        [fields["transport"]]: 'AIRLINE',
      }
    },
    "relationships": {
      "stage": {
        "data": {
          "type": "deal-stages",
          "id": fields["idStageSlot"]
        }
      }
    }
  },
  images: []
}

export default defaultSlot;
