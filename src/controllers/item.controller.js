import { itemService } from '../services/item.service.js';

export const itemController = {
  async create(req, res) {
    try {
      const item = await itemService.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async getAll(_req, res) {
    try {
      const items = await itemService.findAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const item = await itemService.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });
      res.json(item);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const item = await itemService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ message: 'Item not found' });
      res.json(item);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async remove(req, res) {
    try {
      const item = await itemService.remove(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
