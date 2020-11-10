<?php

namespace App\Controller;

use App\Entity\Attribution;
use App\Repository\AttributionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AttributionController extends AbstractController
{
    /**
     * @Route("/attribution", name="attributionCreate", methods={"POST"})
     */
    public function store(Request $request): Response
    {
        return $this->json([
            'message' => 'Create attribution',
        ]);
    }

    /**
     * @Route("/attribution/{id}", name="attributionDelete", methods={"GET"})
     */
    public function destroy($id, AttributionRepository $repo, EntityManagerInterface $em): Response
    {
        if($repo->findOneBy(['id' => $id])) {
        $em->remove($repo->findOneBy(['id' => $id]));
        $em->flush();

        return $this->json([
            'error' => false,
            'message' => "l'attribution est supprimée",
        ], 200);
        } else {
            return $this->json([
                'statut' => 400,
                'error' => true,
                'message' => "id non existant"
            ],400);
        }
    }
}
