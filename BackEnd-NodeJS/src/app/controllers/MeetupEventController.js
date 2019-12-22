import { startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import User from '../models/User';

class MeetupEventController {
    async index(req, res) {
        const { date, page = 1 } = req.query;

        const formattedDate = new Date(date);

        const meetups = await Meetup.findAll({
            where: {
                date: {
                    [Op.between]: [
                        startOfDay(formattedDate),
                        endOfDay(formattedDate),
                    ],
                },
            },
            limit: 10,
            offset: (page - 1) * 10,
            order: ['date'],
            attributes: ['id', 'title', 'location', 'date'],
            include: [
                { model: User, as: 'user', attributes: ['name', 'email'] },
            ],
        });

        res.json(meetups);
    }
}

export default new MeetupEventController();
