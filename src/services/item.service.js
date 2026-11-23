import { Item } from '../models/item.model.js';

export const itemService = {
  create: (data) => Item.create(data),
  findAll: () => Item.find(),
  findById: (id) => Item.findById(id),
  update: (id, data) => Item.findByIdAndUpdate(id, data, { new: true, runValidators: true }),
  remove: (id) => Item.findByIdAndDelete(id),
};
