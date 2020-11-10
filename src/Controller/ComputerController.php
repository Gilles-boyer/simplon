<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ComputerController extends AbstractController
{
    /**
     * @Route("/computer/all/{date}", name="computerAll", methods={"GET"})
     * 
     */
    public function index($date): Response
    {
        return $this->json([
            'message' => "$date computer all",
        ]);
    }

    /**
     * @Route("/computer", name="computerCreate", methods={"POST"})
     * 
     */
    public function store(Request $request): Response
    {
        return $this->json([
            'message' => 'create computer',
        ]);
    }

    /**
     * @Route("/computer/delete/{id}", name="computerDelete", methods={"GET"})
     * 
     */
    public function destroy($id): Response
    {
        return $this->json([
            'message' => "delete $id computer",
        ]);
    }
}
