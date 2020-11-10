<?php

include_once 'db.php';

class Producto extends DB{
    
    function obtenerProductos(){
        $query = $this->connect()->query('SELECT * FROM productos');
        return $query;
    }

    function obtenerProductos2(){
        //$query = $this->connect()->query('SELECT * FROM productos');
        $query = $this->connect()->query('SELECT p.*,SUM(t.cantidad) as total FROM productos p, tallas t WHERE t.producto=p.id GROUP BY t.producto');
        return $query;
    }

    function obtenerProducto($id){
        $query = $this->connect()->prepare('SELECT * FROM productos WHERE id = :id');
        $query->execute(['id' => $id]);
        return $query;
    }

    function comprobarDel($id){
        //$query = $this->connect()->prepare('SELECT * FROM productos p, filas f, tallas t WHERE p.id=f.producto AND t.producto=p.id AND p.id=:id');
        $query = $this->connect()->prepare('SELECT * FROM productos LEFT JOIN filas ON productos.id = filas.producto LEFT JOIN tallas ON productos.id = tallas.producto     
            WHERE (tallas.id is NOT NULL OR filas.id is NOT NULL) AND productos.id=:id');
        $query->execute(['id' => $id]);
        return $query;
    }

    function maxID(){
        $query = $this->connect()->query('SELECT MAX(id) as id FROM productos');
        return $query;
    }

    function buscarIMG($id){
        $query = $this->connect()->prepare('SELECT foto FROM productos WHERE id = :id');
        $query->execute(['id' => $id]);
        return $query;
    }

    function nuevoProducto($producto,$max){
        $query = $this->connect()->prepare('INSERT INTO productos (id,nombre,categoria,subcategoria,marca,equipo,descripcion,precio,fecha,foto) 
        VALUES (:id,:nombre,:categoria,:subcategoria,:marca,:equipo,:descripcion,:precio, NOW(),:foto)');
        $query->execute(['id' => $max['id']+1, 'nombre' => $producto['nombre'], 'categoria' => $producto['categoria'], 'subcategoria' => $producto['subcategoria'], 
        'marca' => $producto['marca'], 'equipo' => $producto['equipo'], 'descripcion' => $producto['descripcion'], 'precio' => $producto['precio'], 
        'foto' => $producto['imagen']]);
        return $query;
    }

    function modProducto($producto){
        $query = $this->connect()->prepare('UPDATE productos SET nombre=:nombre,categoria=:categoria,subcategoria=:subcategoria,marca=:marca,equipo=:equipo,
        descripcion=:descripcion,precio=:precio WHERE id=:id');
        $query->execute(['id' => $producto['id'], 'nombre' => $producto['nombre'], 'categoria' => $producto['categoria'], 'subcategoria' => $producto['subcategoria'], 
        'marca' => $producto['marca'], 'equipo' => $producto['equipo'], 'descripcion' => $producto['descripcion'], 'precio' => $producto['precio']]);
        return $query;
    }

    function delProducto($producto){
        $query = $this->connect()->prepare('DELETE FROM productos WHERE id=:id');
        $query->execute(['id' => $producto['id']]);
        return $query;
    }

}

?>