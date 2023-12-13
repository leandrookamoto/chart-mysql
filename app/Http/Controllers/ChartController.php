<?php

namespace App\Http\Controllers;
use App\Models\Chart;

use Illuminate\Http\Request;

class ChartController extends Controller
{
    public function getAllChart() {
        $chart = Chart::get()->toJson(JSON_PRETTY_PRINT);
     return response($chart, 200);
     }




     public function createChart(Request $request)
{

    $request->validate([
        'animal' => 'required|max:255',
        'popularidade' => 'required|integer',
    ]);

    $table = new Chart;
    $table->animal = $request->animal; 
    $table->popularidade = $request->popularidade; 
    $table->save(); // Salva os dados na tabela 'Chart'

    return response()->json([
        "message" => "Dados gravados com sucesso"
    ], 201);
}


public function deletar()
{
    Chart::truncate(); 

    return response()->json(['message' => 'Dados da tabela apagados com sucesso'], 200);
}
}


