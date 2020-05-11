const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5) 
        .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.City',
        'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },


    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;  // cabecalho requisicao dados autenticacao do usuario

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    },


    async delete(request, response) {
        const { id } = request.params;  // parametro de rota
        const ong_id = request.headers.authorization;  //confirmar se o incidente a deletar eh da ong que esta deletando

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) { 
            return response.status(401).json({ error: 'Operation not permitted. '});
        }
        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }

};