import * as Yup from 'yup';
import Meetup from '../models/Meetup';

class MeetupController {
    async store(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            location: Yup.string().required(),
            date: Yup.date().required(),
        });

        if (!schema.isValid(req.body)) {
            res.status(401).json({ error: 'Validation fails' });
        }

        const { title, description, location, date } = req.body;

        const meetup = await Meetup.create({
            user_id: req.userId,
            title,
            description,
            location,
            date,
        });

        return res.json(meetup);
    }
}

export default new MeetupController();
