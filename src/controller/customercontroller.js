const connection = require("express-myconnection");

const controller = {};

controller.list = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customer',
        (err,customers)=>{
            if(err){
                res.json(err )
            }
            res.render('customers',{data:customers});
        }
        )
    })
}

controller.save = (req, res)=>{
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, conn)=>{
        const query = conn.query('INSERT INTO customer set ?', data, (err, customer)=>{
            res.redirect('/')
        })
    })
}

controller.edit = (req, res)=>{
    const {id} = req.params;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FORM customer where id = ?', [id], (err, rows)=>{
            res.render('customers_edit',{
                data: rows[0]
            })
        })
    })
}

controller.update = (req, res)=>{
    const {id} = req.params;
    const newCustomer = req.body
    req.getConnection((err,conn)=>{
        conn.query('UPDATE customer set ? where id = ?'[newCustomer,id], (err, rows)=>{
            res.redirect('/')
        })
    })
}

controller.delete = (req, res)=>{
    const {id}= req.params
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM customer WHERE id = ?'[id], (err,rows)=>{
            res.redirect('/')
        })
    })
}